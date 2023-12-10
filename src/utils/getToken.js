/**
 * Get token by requesting Tokenization Service
 * @param {Object} data 
 * @returns {Promise}
 */
const getTokenByServiceToken = async(data) => {
    return await fetch('http://localhost:5000/token/create',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}


module.exports = {
    getTokenByServiceToken
}