export default {
    body: {
        isLength: {
            options: {min:3}
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