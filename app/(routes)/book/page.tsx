'use client';

import Nav from '@/app/components/nav/nav';
import styles from './book.module.css';
import { Form } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import assets from '@/app/assets/assets';
import Image from 'next/image';
import { authRoute } from '@/app/utils/authRoute';

export default function Book() {
  const router = useRouter();

  function goToDashboard() {
    router.replace('/dashboard');
  }

  function goToLogin() {
    router.replace('/login');
  }

  const [authStatus, setAuthStatus] = useState(0);


  // state for storing loading request value
  const [isLoading, setIsLoading] = useState(false);

  // interface for action function
  interface IBookEvent {
    service: string;
    date: string;
    hour: string;
  }

  // action function calling internal api
  function book(event: IBookEvent) {
    setIsLoading(true);
    alert(
      'This functionality is currently unavailable, please try again later.',
    );
    setIsLoading(false);
  }

  // form onSubmit function calls action function
  const formSubmit = (event: any) => {
    book(event);
  };

  // sign in function types
  type FieldType = {
    service?: string;
    date?: string;
    hour?: string;
  };

  async function auth() {
    const status: any = await authRoute();
    setAuthStatus(status);
  }

  useEffect(() => {
    auth();
  }, []);

  if (!authStatus) {
    return (
      <div className={styles.home}>
        <div className={styles.loading}>
          <div className={styles.loader}>
            {' '}
          </div>
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (authStatus == 500) {
    alert('There was an error with our services, please try again later.');
    goToLogin();
  }

  if (authStatus === 401) {
    alert('Authentication is required');
    goToLogin();
  }

  if (authStatus === 200) {
    return (
      <div className={styles.home}>
        <Nav />
        <div className={styles.dashboard}>
          <div onClick={goToDashboard} className={styles.back_button}>
            <Image
              style={{
                transform: 'rotate(180deg)',
                color: 'var(--brand-primary)',
              }}
              src={assets.arrow}
              alt=""
              width={50}
              height={30}
            />
            <span>Go back to appointments</span>
          </div>
          <div className={styles.modal}>
            <span>Book appointment</span>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={formSubmit}
              autoComplete="off"
              className={styles.form}
            >
              <Form.Item<FieldType>
                name="service"
                rules={[{ required: true, message: 'Please select a service!' }]}
              >
                <div className={styles.inputWrapper}>
                  <span>service</span>
                  <input type="text" className={styles.input} />
                </div>
              </Form.Item>
  
              <Form.Item<FieldType>
                name="date"
                rules={[{ required: true, message: 'Please select a date!' }]}
              >
                <div className={styles.inputWrapper}>
                  <span>date</span>
                  <input type="date" className={styles.input} />
                </div>
              </Form.Item>
  
              <Form.Item<FieldType>
                name="hour"
                rules={[{ required: true, message: 'Please select a timeslot!' }]}
              >
                <div className={styles.inputWrapper}>
                  <span>hour</span>
                  <input type="text" className={styles.input} />
                </div>
              </Form.Item>
  
              <Form.Item>
                <button className={styles.button} type="submit">
                  Book
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
