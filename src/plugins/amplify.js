import Vue from 'vue'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-vue'
import awsExports from '../aws-exports' // '@/aws-exports' かも

Amplify.configure(awsExports)
Vue.use(Amplify)
