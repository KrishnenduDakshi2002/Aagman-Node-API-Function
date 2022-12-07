const Fuse = require('fuse.js');
const HandleFuzzySearch = (query,questions,keys)=>{
    // decoding query string
    // search&array
    const QUERY  = query.split('+').join(' ')
    let result = [];
    const options = {
      includeScore: true,
      keys: keys,
    };
    const fuse = new Fuse(questions, options);
    const items = fuse.search(QUERY);

    // processing the result
    items.map(item => result.push(item.item));

    return result;
}

export default HandleFuzzySearch;