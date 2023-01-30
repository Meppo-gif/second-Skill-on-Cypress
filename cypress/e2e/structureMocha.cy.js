/// <reference types="cypress" />
describe('My test suite', function test(){
    it('test case 2', ()=>{

    })
    it.skip('test case 2',()=>{
        // skip: Indicates this test should not be executed.
    })
    it.only('test case 2',()=>{
        //only: Indicates this test should be executed exclusively.
    })
})
describe('My test suite 2', function(){

})
describe('My test suite 3',()=>{

})