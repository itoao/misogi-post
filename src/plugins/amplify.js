import Vue from 'vue'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-vue'
<<<<<<< HEAD:src/plugins/amplify.js
import awsExports from '../aws-exports'
=======
import awsExports from '@/aws-exports'
>>>>>>> 00d3aed14e2d9d57607d199729d867007f449684:src/plugins/amplify.js

Amplify.configure(awsExports)
Vue.use(Amplify)
