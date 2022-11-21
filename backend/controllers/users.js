import User from "../models/User.js"

//get user
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//get all friends
export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const friends = await Promise.all(   //Promise.all() as we have to make multiple API calls
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(({ _id, firstName, LastName, occupation, location, picturePath }) => {
            return { _id, firstName, LastName, occupation, location, picturePath }
        });
        res.status(200).json(formattedFriends);

    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}

// add|remove friend
export const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await findById(id);
        const friend = await User.findById(friendId);
        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId); //removing to each other's friends array 
            friend.friends = friend.friends.filter((id) => id !== id)
        } else {
            user.friends.push(friendId);                                    //adding to each other's friends array
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();

        const friends = await Promise.all(                              //format friends array
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(({ _id, firstName, LastName, occupation, location, picturePath }) => {
            return { _id, firstName, LastName, occupation, location, picturePath }
        });
        res.status(200).json(formattedFriends);
    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}