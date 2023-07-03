# Bounceless Node.js API Client

This Node.js client allows you to interact with the Bounceless.io API for email verification. The client supports the following features:

1. Single email verification
2. Bulk email verification from a CSV file
3. Fetching verification results for a file

## Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/bounceless/Bounceless-Nodejs.git
```

Then, install the necessary packages using npm:

```bash
npm install axios form-data
```

## Usage

Import the necessary classes from the `bounceless` module:

```javascript
const { BouncelessOne, BouncelessBulk } = require('./bounceless');
```

### Single Email Verification

Use the `BouncelessOne` class to verify a single email. You will need to provide your API key and the email you wish to verify:

```javascript
const verifySingleEmail = async () => {
    // Replace 'YOUR_KEY' with your actual API key
    // Replace 'test@email.com' with the actual email you want to verify
    const bouncelessOne = new BouncelessOne('YOUR_KEY', 'test@email.com');
    const response = await bouncelessOne.control();
    console.log(response);
};
```

### Bulk Email Verification

Use the `BouncelessBulk` class to verify a bulk of emails from a CSV file. Provide your API key and the path to the CSV file:

```javascript
const verifyBulkEmails = async () => {
    // Replace 'YOUR_KEY' with your actual API key
    // Replace 'path/to/file.csv' with the actual path to your CSV file
    const bouncelessBulk = new BouncelessBulk('YOUR_KEY', 'path/to/file.csv');
    const response = await bouncelessBulk.upload();
    console.log(response);
};
```

### Fetching Verification Results

After a bulk upload, fetch the verification results using the `get_info()` method from the `BouncelessBulk` class. This method can also be used independently by providing the ID of a previously uploaded file:

```javascript
const getBulkInfo = async () => {
    // Replace 'YOUR_KEY' with your actual API key
    // Replace 'FILE_ID' with the actual ID of your uploaded file
    const bouncelessBulk = new BouncelessBulk('YOUR_KEY', 'FILE_ID');
    const response = await bouncelessBulk.get_info();
    console.log(response);
};
```

Finally, call these functions in your main script:

```javascript
verifySingleEmail();
verifyBulkEmails();
getBulkInfo();
```

## Contributing

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct. Feel free to submit pull requests or open issues to improve the project.

## License

This project is licensed under the terms of the MIT license.
