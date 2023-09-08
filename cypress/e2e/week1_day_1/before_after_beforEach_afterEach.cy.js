

describe('before after before each after each',()=>{


    before(()=>{
        console.log("before is called");
    })

    after(()=>{
        console.log("after is called");
    })

    beforeEach(()=>{
        console.log("before each is called");
    })

    afterEach(()=>{
        console.log("after each is called");
    })

    
    it('test 1',()=>{
        console.log("test 1 is called");
    })

    it('test 2',()=>{
        console.log("test 2 is called");
    })

    it('test 3',()=>{
        console.log("test 3 is called");
    })

    it('test 4',()=>{
        console.log("test 4 is called");
    })

    it('test 5',()=>{
        console.log("test 5 is called");
    })

    it('test 6',()=>{
        console.log("test 6 is called");
    })


})