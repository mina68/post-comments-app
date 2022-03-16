export default {
    body: {
        isLength: {
            errorMessage: 'Comment body must be 3 chars at least.',
            options: {
                min: 3
            }
        }
    },
    post_id: {
        isInt: {
            options: {
                min: 1
            }
        }
    }
}