// use client declaration to act from browser
'use client';
// imports:
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Form } from 'antd';
import styles from './signIn.module.css';
import assets from '@/app/assets/assets';
import Image from 'next/image';
// sign in modal
export default function SignIn() {
  // router
  const router = useRouter();

  // state for storing loading request value
  const [isLoading, setIsLoading] = useState(false);

  // interface for action function
  interface ILoginEvent {
    username: string;
    password: string;
  }

  // action function calling internal api
  function login(event: ILoginEvent) {
    setIsLoading(true);
    fetch('http://localhost:3000/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          router.replace('/dashboard');
        }
        if (res.status === 401) {
          alert('Incorrect username or password');
        }
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  // form onSubmit function calls action function
  const formSubmit = (event: any) => {
    login(event);
  };
  // sign in function types
  type FieldType = {
    username?: string;
    password?: string;
  };

  // return JSX
  return (
    <div className={styles.modal}>
      <span>Sign In</span>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={formSubmit}
        autoComplete="off"
        className={styles.form}
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <div className={styles.inputWrapper}>
            <span>username</span>
            <input type="text" className={styles.input} />
          </div>
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <div className={styles.inputWrapper}>
            <span>password</span>
            <input type="password" className={styles.input} />
          </div>
        </Form.Item>

        <Form.Item>
            <button className={styles.button} type="submit">
              {isLoading ? (
                <div className={styles.loader}></div>
              ) : (
                <Image src={assets.arrow} alt="" width={30} height={30} />
              )}
              Confirm
            </button>
        </Form.Item>
      </Form>
    </div>
  );
}
