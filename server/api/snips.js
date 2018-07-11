const express = require("express");
const router = express.Router();
const queries = require("../db/queries");

function isValidId(request, response, next) {
    if(!isNaN(request.params.id)) return next()
    next(new Error('Nice Try Dipstick'))
}

function validSnip(snip) {
    const hasTitle = typeof snip.title == 'string' && snip.title.trim() != '';
    const hasDescription = typeof snip.description == 'string' && snip.description.trim() != '';
    return hasDescription && hasTitle
}

router.get("/", (request, response) => {
  queries.list().then(snips => {
      response.json(snips);
    })
});

router.get("/:id", isValidId, (request, response, next) => {
  queries
    .read(request.params.id)
    .then(snip => {
        if(snip) {
       response.json(snip);
        } else {
            next()
        }
    })
});

router.post("/", (request, response, next) => {
    if(validSnip(request.body)) {
  queries.create(request.body)
    .then(snips => {
      response.status(201).json(snips[0]);
    })
} 
else {
    next(new Error('Invalid Entry'))
}
});

router.delete("/:id", isValidId, (request, response) => {
  queries.delete(request.params.id)
    .then(() => {
      response.json({ deleted: true });
    })
});

router.put("/:id", isValidId, (request, response, next) => {
    if(validSnip(request.body)) {
  queries.update(request.params.id, request.body)
    .then(snips => {
      response.json(snips[0]);
    })
} else {
    next(new Error('Invalid Entry'))
}
});
module.exports = router;
