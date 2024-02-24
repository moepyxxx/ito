## local db migration

- see: https://supabase.com/docs/guides/cli/local-development

### local signup/signin

- `supabase start`コマンド
- 以下でsignup/signinする

```
curl -X POST -H "Content-Type: application/json" -d '{"user":{"email":"satoyukashi@gmail.com", "password":"password" }}' localhost:3001/api/auth/signin
```
