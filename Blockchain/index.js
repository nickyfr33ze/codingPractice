// URL walkthrough: https://medium.com/geekculture/blockchain-explained-in-50-lines-of-code-1dbf4eda0201
const hash = require("crypto-js/sha256");   //sets the encryption algorithm for this blockchain & and sets the constant of hash to the type of encryption
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
class Blockchain {  //This is a new class or object called "Blockchain"
    constructor(){  //this object take a constructor parameter
        let genesisBlock = new Block("0", { isGenesis: true});  //this is the data that will be passed to the constructor, genesisBlock is the first block in the chain which is why you can see 0 passed in this
        this.chain = [genesisBlock];
    }
    addBlock(data){     //addBlock is a function that adds a new block to the blockchain
        let lastBlock = this.chain[this.chain.length - 1];      //this will accept new data as a parameter amd creates a new blcok based on the data passed 
        let newBlock = new Block(lastBlock.hash, data);         //and the previous block's health
        newBlock.mine(2); // find a hash for a new block with the difficulty set to 2 as the new hasvalue MUST starts with 2 zeroes
        this.chain.push(newBlock);
    }
    isValid(){ //returns true if the current chain is valid or not
        for (let i = 0; i < this.chain.length; i++){    //assigns two pointers to both the current block and the previous block
            const currentBlock = this.chain[i];     //the first in the lineof blocks
            const previousBlock = this.chain[i-1];  //the previous (right behind the first 'i') block in the line

            if (currentBlock.hash != currentBlock.calculateHash()) return false;            //returns false if the hashes of the current block do not match
            if (currentBlock.previousHash != previousBlock.calculateHash()) return false;   //returns false if the hashes of the previous block hashes do not match
        }
        return true;    //if the hashes of the blocks match, returns true
    }
}
//now going to add 2 new blocks to the chain that contain transisitons information to our blockchain
let blockchain = new Blockchain();
blockchain.addBlock({   //calls back to the addBlock function on line 35 and takes the data passed in this function
    from: 'Viet',   //sender
    to: 'Nick',     //recipient
    amount: 69420,  //amount to be transferred 
});
blockchain.addBlock({   //add another block to the chain
    from: 'Kenny',  //sender
    to: 'Elon',     //recipient
    amount: 42069,  //amount to be transferred
});