# Installing and Setting up Mongo

- Install token based authentication - `npm install --save jwt-simple`
- Install Mongo DB - `mongodb-win32-x86_64-2008plus-ssl-3.4.9-signed.msi`
- Create a new folder path - `C:\data\db\`
- Navigate to `C:\Program Files\MongoDB\Server\3.4\bin`
- Run `mongod`
- Again Navigate to `C:\Program Files\MongoDB\Server\3.4\bin`
- Run `mongo`

# Satellizer for AngularJS Authentication

- [Gitub Link for AngularJS Token based Authentication](https://github.com/sahat/satellizer)


# Sending Response Objects

To send the response objects, we need to chain the response obj with the `.send({obj})` method

```js
module.exports = {
    reqister:function(req,res){
        res.status(200).send({
            data:{                
                message:'successfully connected'
            }
        })
    }//end:register
}//end:auth.js
```

# HTTP Status Messages

- 200 - Created
- 201 - Updated
- 300 - HTTP redirect
- 301 - redirect/refresh
- 404 - Not Found
- 401 - Unauthorized
- 409 - Conflict
- 500 - Internal Server Error

# Angular 2 NgBlur Admin 2 Dashboard Rules

- To change the theme to default white, change the following:
    - `theme.module.ts` - const NB_THEME_PROVIDERS = name:`default`

```ts
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [ DEFAULT_THEME, COSMIC_THEME ],
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
];
```
---

- To Remove the Theme Switcher, remove/comment the following component - `theme-switcher.component.ts`:

- header.component.html
```html
<div class="header-container"
     [class.left]="position === 'normal'"
     [class.right]="position === 'inverse'">
  <div class="logo-containter">
    <a (click)="toggleSidebar()" href="#" class="navigation"><i class="nb-menu"></i></a>
    <div class="logo" (click)="goToHome()">ngx-<span>admin</span></div>
  </div>
  <!-- <ngx-theme-switcher></ngx-theme-switcher> -->
</div>
```
