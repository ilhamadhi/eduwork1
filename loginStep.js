/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open the Zero Webappsecurity website', () => {
    LoginPage.visit()
})

When('I typed the word "Transfer Funds" on the searchbar and pressed Enter', () => {
    LoginPage.searchbar()
})

Then('I should get the search result about "Transfer Funds" in the Zero Webappsecurity', () => {
    LoginPage.results()
})