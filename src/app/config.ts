import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Headers } from '@angular/http';

declare var oauthSignature: any;
let headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

@Injectable({
  providedIn: 'root',
})
export class Config {

    url: any;
    consumerKey: any;
    consumerSecret: any;
    avatar: any = 'assets/image/shop-icon.jpg';
    oauth: any;
    signedUrl: any;
    randomString: any;
    oauth_nonce: any;
    oauth_signature_method: any;
    encodedSignature: any;
    searchParams: any;
    customer_id: any;
    params: any;
    options: any = {};
    optionstwo: any = {};
    lang: any = 'en';
    constructor() {

        this.url = 'https://www.amgbazaar.com';
        // Replace URL_PLACEHOLDER with you site url (http://example.com)
        this.consumerKey = 'ck_7e098e9ca4ecaca1e3d4c1e43ca8594298188e34';
        // Replace CONSUMER_KEY_PLACEHOLDER with you site consumer_key
        this.consumerSecret = 'cs_81a1e746f20ea92c713b37b8b2e101bae3f29810';
        // Replace CONSUMER_KEY_PLACEHOLDER with you site consumer_secret

        this.options.withCredentials = true;
        this.options.headers = {};
        this.optionstwo.withCredentials = false;
        this.optionstwo.headers = {};
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new URLSearchParams();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
    }
    setOauthNonce(length, chars) {
        let result = '';
        for (let i = length; i > 0; --i) { result += chars[Math.round(Math.random() * (chars.length - 1))]; }
        return result;
    }
    setUrl(method, endpoint, filter) {
        let key;
        let unordered = {};
        let ordered = {};
        if (this.url.indexOf('https') >= 0) {
            unordered = {};
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            unordered['lang'] = this.lang;
            Object.keys(unordered).sort().forEach(function(key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new URLSearchParams();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            return this.url + endpoint + this.searchParams.toString();
        } else {
            let url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;
            for (key in this.params) {
                unordered[key] = this.params[key];
            }
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['lang'] = this.lang;
            Object.keys(unordered).sort().forEach(function(key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new URLSearchParams();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return this.url + endpoint + this.searchParams.toString() + '&oauth_signature=' + this.encodedSignature;
        }
    }
}
