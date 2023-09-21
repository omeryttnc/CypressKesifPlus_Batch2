/**
 * Assert if object is truthy(Ensures object is not undefined or null)	    assert.isOk(object, ‘Validate object is truthy’)
Assert if two objects are equal	                                            assert.equal(“0 Product(s) found.”, $el.text(), “Product Text found.”)
Assert if two objects are equal with all they keys are values are matching	assert.deepEqual({name: “User1”, Age: 26}, {name: “User1”, Age: “26”}), “This assertion will fail as the Age value in second object is string”)
Assert if the given value is an Object	                                    assert.isObject({name: “user1, age: 26}, “Check if the value is object”)
Assert if the given value is greater than expected value	                assert.isAbove(6,1, “Check if 6 is greater than 1”)
Assert if the given value belongs to a specific Data type	                assert.typeOf(“user1”, “string”, “Check if the value is of type string”)
 */
