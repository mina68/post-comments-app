export default {
    title: {
        isLength: {
            errorMessage: 'Post title must be 3 chars at least.',
            options: {min:3}
        }
    },
    body: {
        isLength: {
            errorMessage: 'Post body must be 10 chars at least.',
            options: {min:10}
        }
    }
}