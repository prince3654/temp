import User from "../model/user.js"

export const signupUser = async (request, response) => {
    try {
        // Extract name username and password from request body
        const user = request.body;
        console.log(user);
        const newUser = new User(user);console.log("hii");
        console.log(newUser);

        await newUser.save();
        // if (!name || !username || !password) {
        //     return response.status(400).json({
        //         msg: 'Please provide all required fields'
        //     });
        // }
        return response.status(200).json({
            msg: 'Signup successfull'
        });
    }
    catch (error) {
        console.error('Error while signing up user:', error);
        return response.status(500).json({
            msg: 'Error while signing up user',
            error: error.message // Include the error message for debugging
        });

    }
}