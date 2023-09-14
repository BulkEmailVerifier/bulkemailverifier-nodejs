

# bulkemailverifier Node.js API Client

This is a Node.js client for the bulkemailverifier.com API.

## Installation

Clone this repository or download the source code. Navigate to the project directory and install the dependencies:

```bash
npm install
```

## Usage

The API client consists of two classes: `bulkemailverifierOne` for single email verification, and `bulkemailverifierBulk` for bulk email verification.

Replace `'YOUR_KEY'`, `'test@email.com'`, `'path/to/file.csv'`, and `'FILE_ID'` with your actual API key, email, file path, and file ID in `index.js`.

### Single Email Verification

```javascript
const { bulkemailverifierOne } = require('./src/bulkemailverifierAPI');

const verifySingleEmail = async () => {
  const bulkemailverifierOne = new bulkemailverifierOne('YOUR_KEY', 'test@email.com');
  const response = await bulkemailverifierOne.control();
  console.log(response);
};

verifySingleEmail();
```

### Bulk Email Verification

```javascript
const { bulkemailverifierBulk } = require('./src/bulkemailverifierAPI');

const verifyBulkEmails = async () => {
  const bulkemailverifierBulk = new bulkemailverifierBulk('YOUR_KEY', 'path/to/file.csv');
  const response = await bulkemailverifierBulk.upload();
  console.log(response);
};

verifyBulkEmails();
```

### Get Verification Result

After uploading a bulk file, you can get the verification result using `get_info()` method:

```javascript
const { bulkemailverifierBulk } = require('./src/bulkemailverifierAPI');

const getBulkInfo = async () => {
  const bulkemailverifierBulk = new bulkemailverifierBulk('YOUR_KEY', 'FILE_ID');
  const response = await bulkemailverifierBulk.get_info();
  console.log(response);
};

getBulkInfo();
```
