const index = require('./index.json')
const home = require('./home.json')
const newhome = require('./newhome.json')
const attention = require('./attention.json')

module.exports = function(){
	return{
		"index": index,
    "home": home,
    "newhome": newhome,
    "attention": attention
	}
}