- vultr.config.json

{
  "api_key": "DB2LMOHPUUCSI5DUX24LDYAPU6IMWZK2YBOA",
 
}


const vultr = require('vultr');

const apiKey = 'DB2LMOHPUUCSI5DUX24LDYAPU6IMWZK2YBOA';


const vultrClient = new vultr({
  apiKey,
  apiSecret,
});

async function getSustainableInvestment(aiResponse) {
  const params = {
    ai_response: aiResponse,
    investment_type: 'sustainable',
  };
  const response = await vultrClient.request('/v1/investments', params);
  return response.investment;
}

module.exports = { getSustainableInvestment };


