'use client'
import { handleLogin } from 'app/actions'
import styles from './LoginForm.module.css'

export const LoginForm = () => {
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const response = await handleLogin(formData);
        if (response?.redirect) {
            window.location.href = response.redirect;
          }
    }
  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>Login</h1>
      <form 
      onSubmit={handleSubmit}
      className={styles.NewAccountForm__form}>
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  )
}

