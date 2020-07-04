import mongoose from 'mongoose'

const SubscriptionsSchema = new mongoose.Schema(
    {
        creatorId: {
            type:mongoose.Schema.ObjectId,
            ref:'User',
            unique:true
        },

        followerId: {
            type:String
        },
    }
);

module.exports = mongoose.model('Subscriptions', SubscriptionsSchema);
