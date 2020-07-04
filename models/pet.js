import mongoose from 'mongoose'

const PetSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:[true, 'Please provide pet name'],
            maxlength:[15, 'Username can contain only 10 characters']
        },
        type: {
            type:String,
            required:[true, 'Please provide pet type'],
            maxlength:[15, 'Username can contain only 10 characters']
        },
        gender: {
            type:String
        },
        ages: {
            type:Number
        },
        ownerId: {
            type:mongoose.Schema.ObjectId,
            ref:'User',
        },
        avatar: {
            type:String,
        },
        background: {
            type:String,
        },

    },
    {
        toJSON: {virtuals:true},
        toObject: {virtuals: true}
    }
);

// PetSchema.pre(/^find/, function (next) {
//    this.populate({
//       path: 'ownerId',
//       select:'_id username'
//    });
//     next();
// });


module.exports = mongoose.model('Pet', PetSchema);
