const { Router } = require('express')
const ROUTER = Router()
const STRIPE = require('stripe')('sk_test_Lb9WuubY40tod1PyBaHpvK4s00juhPxStI')


ROUTER.get('/', (req, res) => {
    res.render('index')
})


ROUTER.post('/checkout', async(req, res) => {
    const token = req.body.stripeToken
    const customer = await STRIPE.customers.create({
        email: req.body.stripeEmail,
        source: token
    })

    const charge = await STRIPE.charges.create({
        amount: 3000,
        currency: 'usd',
        description: 'Video Editing',
        customer: customer.id
    })
    console.log(charge.id);


    res.render('download')
})
module.exports = ROUTER