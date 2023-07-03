const { BouncelessOne, BouncelessBulk } = require('./bouncelessAPI');

const verifySingleEmail = async () => {
  const bouncelessOne = new BouncelessOne('YOUR_KEY', 'test@email.com');
  const response = await bouncelessOne.control();
  console.log(response);
};

const verifyBulkEmails = async () => {
  const bouncelessBulk = new BouncelessBulk('YOUR_KEY', 'path/to/file.csv');
  const response = await bouncelessBulk.upload();
  console.log(response);
};

const getBulkInfo = async () => {
  const bouncelessBulk = new BouncelessBulk('YOUR_KEY', 'FILE_ID');
  const response = await bouncelessBulk.get_info();
  console.log(response);
};

verifySingleEmail();
verifyBulkEmails();
getBulkInfo();
