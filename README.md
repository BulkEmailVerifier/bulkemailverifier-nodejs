

# Bounceless Node.js API Client

This is a Node.js client for the Bounceless.io API.

## Installation

Clone this repository or download the source code. Navigate to the project directory and install the dependencies:

```bash
npm install
```

## Usage

The API client consists of two classes: `BouncelessOne` for single email verification, and `BouncelessBulk` for bulk email verification.

Replace `'YOUR_KEY'`, `'test@email.com'`, `'path/to/file.csv'`, and `'FILE_ID'` with your actual API key, email, file path, and file ID in `index.js`.

### Single Email Verification

```javascript
const { BouncelessOne } = require('./src/bouncelessAPI');

const verifySingleEmail = async () => {
  const bouncelessOne = new BouncelessOne('YOUR_KEY', 'test@email.com');
  const response = await bouncelessOne.control();
  console.log(response);
};

verifySingleEmail();
```

### Bulk Email Verification

```javascript
const { BouncelessBulk } = require('./src/bouncelessAPI');

const verifyBulkEmails = async () => {
  const bouncelessBulk = new BouncelessBulk('YOUR_KEY', 'path/to/file.csv');
  const response = await bouncelessBulk.upload();
  console.log(response);
};

verifyBulkEmails();
```

### Get Verification Result

After uploading a bulk file, you can get the verification result using `get_info()` method:

```javascript
const { BouncelessBulk } = require('./src/bouncelessAPI');

const getBulkInfo = async () => {
  const bouncelessBulk = new BouncelessBulk('YOUR_KEY', 'FILE_ID');
  const response = await bouncelessBulk.get_info();
  console.log(response);
};

getBulkInfo();
```
