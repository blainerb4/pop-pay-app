const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const {JSDOM} = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml: {
        type: String,
        required: true
    }
})
//run function before we do validation, create slug from title (allows us to identify
// articles in the database, assign unqiue urls so no duplicates)
articleSchema.pre('validate', function(next) {
    if(this.title) {
        this.slug = slugify(this.title, {
            lower: true,
            strict: true
        })
    }

    if (this.markdown) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }
//converts markdown to html and purufies html to get rid of malicious code
    next()
})
//make sure slug in lower case, strict true force sluify to force characters that dont fit in url
//next helps with validation
module.exports = mongoose.model('Article', articleSchema)

// # -big text ... ## medium text