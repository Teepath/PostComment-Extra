const rewire = require("rewire")
const Comments = rewire("./Comments")
const deleteCommentAction = Comments.__get__("deleteCommentAction")
const editCommentAction = Comments.__get__("editCommentAction")
// @ponicode
describe("deleteCommentAction", () => {
    test("0", () => {
        let callFunction = () => {
            deleteCommentAction(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            deleteCommentAction("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            deleteCommentAction("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            deleteCommentAction(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            deleteCommentAction(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            deleteCommentAction(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("editCommentAction", () => {
    test("0", () => {
        let callFunction = () => {
            editCommentAction("bc23a9d531064583ace8f67dad60f6bb", "adcb112")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            editCommentAction(12345, "d8e3987")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            editCommentAction(987650, "d8e3987")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            editCommentAction("bc23a9d531064583ace8f67dad60f6bb", "d8e3987")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            editCommentAction("a1969970175", "879365a")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            editCommentAction(Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Comments.handleEditComment", () => {
    test("0", () => {
        let callFunction = () => {
            Comments.handleEditComment(987650, "--embed")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Comments.handleEditComment(987650, "--localtime")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Comments.handleEditComment("bc23a9d531064583ace8f67dad60f6bb", "--directive")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Comments.handleEditComment("a1969970175", "Unknown compiler flag: %s\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Comments.handleEditComment("a1969970175", "--embed")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Comments.handleEditComment(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Comments.getCommentByParentid", () => {
    test("0", () => {
        let callFunction = () => {
            Comments.getCommentByParentid("0200006")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Comments.getCommentByParentid("d8e3987")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Comments.getCommentByParentid("adcb112")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Comments.getCommentByParentid("f31df64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Comments.getCommentByParentid("879365a")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Comments.getCommentByParentid(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Comments.postComment", () => {
    test("0", () => {
        let callFunction = () => {
            Comments.postComment("f31df64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Comments.postComment("0200006")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Comments.postComment("879365a")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Comments.postComment("adcb112")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Comments.postComment("d8e3987")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Comments.postComment(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Comments.voteCommentAction", () => {
    test("0", () => {
        let callFunction = () => {
            Comments.voteCommentAction(12, "unknown option: ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Comments.voteCommentAction(987650, "--image")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Comments.voteCommentAction(987650, "--embed")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Comments.voteCommentAction(12345, "--user")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Comments.voteCommentAction(12, "--include-dir")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Comments.voteCommentAction(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Comments.handleCommentByParentId", () => {
    test("0", () => {
        let callFunction = () => {
            Comments.handleCommentByParentId(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Comments.handleCommentByParentId("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Comments.handleCommentByParentId(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Comments.handleCommentByParentId(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Comments.handleCommentByParentId(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Comments.handleCommentByParentId(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Comments.postCommentToParent", () => {
    test("0", () => {
        let callFunction = () => {
            Comments.postCommentToParent("adcb112")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Comments.postCommentToParent("d8e3987")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Comments.postCommentToParent("f31df64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Comments.postCommentToParent("879365a")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Comments.postCommentToParent("0200006")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Comments.postCommentToParent(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Comments.voteCommentClick", () => {
    test("0", () => {
        let callFunction = () => {
            Comments.voteCommentClick("a1969970175", -2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Comments.voteCommentClick("a1969970175", "unknown option: ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Comments.voteCommentClick(987650, "Unknown compiler flag: %s\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Comments.voteCommentClick(12, "--email")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Comments.voteCommentClick(56784, "--convert-range")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Comments.voteCommentClick(Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
