const { bulkemailverifierOne, bulkemailverifierBulk } = require('./bulkemailverifierAPI');

const verifySingleEmail = async () => {
  const bulkemailverifierOne = new bulkemailverifierOne('YOUR_KEY', 'test@email.com');
  const response = await bulkemailverifierOne.control();
  console.log(response);
};

const verifyBulkEmails = async () => {
  const bulkemailverifierBulk = new bulkemailverifierBulk('YOUR_KEY', 'path/to/file.csv');
  const response = await bulkemailverifierBulk.upload();
  console.log(response);
};

const getBulkInfo = async () => {
  const bulkemailverifierBulk = new bulkemailverifierBulk('YOUR_KEY', 'FILE_ID');
  const response = await bulkemailverifierBulk.get_info();
  console.log(response);
};

verifySingleEmail();
verifyBulkEmails();
getBulkInfo();
