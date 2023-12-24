const mongoose = require('mongoose') // Pulls in Mongoose

/* const TodoSchema = new mongoose.Schema({ // Mongoose schema
  todo: {
    type: String,
    required: true, // Mandatory field to be filled
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
}) */

const rm = new mongoose.Schema({ // Mongoose schema
  cogs: {
    type: Number,
    required: true, // Mandatory field to be filled
  },
  rainbowCard: {
    type: Number,
    required: true,
  },
  blackCard: {
    type: Number,
    required: true
  },
  eventCTicket: {
    type: Number,
    required: true,
  },
  eventWTicket: {
    type: Number,
    required: true,
  },
  basicCTicket: {
    type: Number,
    required: true,
  },
  basicWTicket: {
    type: Number,
    required: true,
  },
  cubTicket: {
    type: Number,
    required: true,
  },
  tradeVoucher: {
    type: Number,
    required: true,
  },
  ppc: {
    type: Number,
    required: true,
  },
  wzMerit: {
    type: Number,
    required: true,
  },
  wzInfluence: {
    type: Number,
    required: true,
  },
  ssToken: {
    type: Number,
    required: true,
  },
  uaPoints: {
    type: Number,
    required: true,
  },
  resPerm: {
    type: Number,
    required: true,
  },
  dormCoin: {
    type: Number,
    required: true,
  },
  decorCoin: {
    type: Number,
    required: true,
  },
  coatingSketch: {
    type: Number,
    required: true,
  },
  coatingBP: {
    type: Number,
    required: true,
  },
  lwChip: {
    type: Number,
    required: true,
  },
  usCrystal: {
    type: Number,
    required: true,
  },
  xpsPod: {
    type: Number,
    required: true,
  },
  xpmPod: {
    type: Number,
    required: true,
  },
  xplPod: {
    type: Number,
    required: true,
  },
  xplxlPod: {
    type: Number,
    required: true,
  },
  memII: {
    type: Number,
    required: true,
  },
  memIII: {
    type: Number,
    required: true,
  },
  memIV: {
    type: Number,
    required: true,
  },
  memOCI: {
    type: Number,
    required: true,
  },
  memOCII: {
    type: Number,
    required: true,
  },
  procShard: {
    type: Number,
    required: true,
  },
  wepEnhanceII: {
    type: Number,
    required: true,
  },
  wepEnhanceIII: {
    type: Number,
    required: true,
  },
  wepEnhanceIV: {
    type: Number,
    required: true,
  },
  wepOCI: {
    type: Number,
    required: true,
  },
  wepOCII: {
    type: Number,
    required: true,
  },
  minorAlloy: {
    type: Number,
    required: true,
  },
  majorAlloy: {
    type: Number,
    required: true,
  },
  fiveMemRes: {
    type: Number,
    required: true,
  },
  sixMemRes: {
    type: Number,
    required: true,
  },
  fiveWepRes: {
    type: Number,
    required: true,
  },
  sixWepRes: {
    type: Number,
    required: true,
  },
  auraBU: {
    type: Number,
    required: true,
  },
  auraChip: {
    type: Number,
    required: true,
  },
  leapAstral: {
    type: Number,
    required: true,
  },
  leapDawn: {
    type: Number,
    required: true,
  },
  leapLuminance: {
    type: Number,
    required: true,
  },
  leapPalefire: {
    type: Number,
    required: true,
  },
  leapRigor: {
    type: Number,
    required: true,
  },
  uniArca: {
    type: Number,
    required: true,
  },
  uniCrocotta: {
    type: Number,
    required: true,
  },
  uniDragontoll: {
    type: Number,
    required: true,
  },
  uniFlambeau: {
    type: Number,
    required: true,
  },
  uniStarveil: {
    type: Number,
    required: true,
  },
  uniTempest: {
    type: Number,
    required: true,
  },
  cubEXPS: {
    type: Number,
    required: true,
  },
  cubEXPL: {
    type: Number,
    required: true,
  },
  supOCS: {
    type: Number,
    required: true,
  },
  supOCL: {
    type: Number,
    required: true,
  },
  ssComponent: {
    type: Number,
    required: true,
  },
  bsBoreas: {
    type: Number,
    required: true,
  },
  bsFrostOath: {
    type: Number,
    required: true,
  },
  bsJetJaeger: {
    type: Number,
    required: true,
  },
  bsMoonhopper: {
    type: Number,
    required: true,
  },
  bsNitor: {
    type: Number,
    required: true,
  },
  bsNoctua: {
    type: Number,
    required: true,
  },
  bsPunchy: {
    type: Number,
    required: true,
  },
  bsSeeshell: {
    type: Number,
    required: true,
  },
  bsShimmer: {
    type: Number,
    required: true,
  },
  bsThorny: {
    type: Number,
    required: true,
  },
  rainbowCard: {
    type: Number,
    required: true,
  },
  bsToniris: {
    type: Number,
    required: true,
  },
  bsYuanYe: {
    type: Number,
    required: true,
  },
})
/* 
module.exports = mongoose.model('Todo', TodoSchema)
 */