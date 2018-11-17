const express = require('express');
const router = express.Router();
const {
  generateRandomAvatar
} = require('../models/icon')

router.get('/', (req, res) => {
  const avatar = generateRandomAvatar()
  res.json({
    url: avatar
  })
})

router.get('/random', (req, res) => {
  const avatar = generateRandomAvatar()
  res.json({
    url: avatar
  })
})

router.get('/circle', (req, res) => {
  const avatar = generateRandomAvatar('Circle')
  res.json({
    url: avatar
  })
})

router.get('/transparent', (req, res) => {
  const avatar = generateRandomAvatar('Transparent')
  res.json({
    url: avatar
  })
})

module.exports = router;
