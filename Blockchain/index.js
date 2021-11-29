// URL walkthrough: https://medium.com/geekculture/blockchain-explained-in-50-lines-of-code-1dbf4eda0201
class Block {
    constructor(previousHash, data){
        this.data = data;
        this.hash = this.calculateHash();
        this.previousHash = previousHash;
        this.timestamp = new Date();
        this.proofOfWork = 0;
    }

    calculateHash(){
        return hash(
            this.previousHash + 
            JSON.stringify(this.data) + 
            this.timestamp + 
            this.proofOfWork
        ).toString();
    }

    mine(difficulty) {
        // find the hash
        while (!this.hash.startsWith("0".repeat(difficulty))) {
            this.proofOfWork++;
            this.hash = this.calculateHash();
        }
    }
}

class Blockchain {
    constructor(){
        let genesisBlock = new Block("0", { isGenesis: true});
        this.chain = [genesisBlock];
    }

    addBlock(data){
        let lastBlock = this.chain[this.chain.length - 1];
        let newBlock = new Block(lastBlock.hash, data);
        newBlock.mine(2); // find a hash for a new block
        this.chain.push(newBlock);
    }
}

