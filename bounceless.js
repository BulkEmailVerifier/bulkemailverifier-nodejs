const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

class BouncelessOne {
  constructor(key, email) {
    this.key = key;
    this.email = email;
    this.url = `https://apps.bounceless.io/api/singlemaildetails?secret=${this.key}&email=${this.email}`;
  }

  async control() {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

class BouncelessBulk {
  constructor(key, user_file) {
    this.key = key;
    this.user_file = user_file;
    this.url = `https://apps.bounceless.io/api/verifyApiFile?secret=${this.key}`;
  }

  async upload() {
    try {
      const form = new FormData();
      form.append('file', fs.createReadStream(this.user_file));
      const response = await axios.post(this.url, form, {
        headers: form.getHeaders()
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async get_info(id) {
    try {
      const url = `https://apps.bounceless.io/api/getApiFileInfo?secret=${this.key}&id=${id}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = { BouncelessOne, BouncelessBulk };
