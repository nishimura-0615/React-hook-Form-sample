import { NextPage } from 'next';
import { useState } from 'react';

import Button from '@/components/common/parts/Button';
import Container from '@/components/common/parts/Container';
import { httpClient } from '@/lib/api/apibase';

const Page: NextPage = () => {
  const [loading, setLoading] = useState(false);

  // 名前のフォームの状態管理
  const [name, setName] = useState('');
  // emailのフォームの状態管理
  const [email, setEmail] = useState('');
  // passwordのフォームの状態管理
  const [password, setPassword] = useState('');

  //送信用の関数

  const onSubmit = async () => {
    let isSuccess = true;
    setLoading(true);
    try {
      await httpClient({
        method: 'post',
        url: '/api/form/01',
        data: {
          name: name,
          email: email,
          password: password,
        },
        // jsonからリクエストを送っているのでapplication/jsonと記載
        headers: {
          'Content-type': 'application/json',
        },
      });
    } catch (error) {
      // エラー処理
      window.alert('送信が失敗しました');
      isSuccess = false;
    }
    setLoading(false);

    if (isSuccess) {
      window.alert('送信が成功しました');
    }
  };

  return (
    <Container maxWidth="max-w-4xl">
      <div className="mt-8">
        <div className="mb-3 mt-8">
          {/* formと紐付け labelを記述するとカーソルを当てられるようになる */}
          <label htmlFor="name">名前</label>
          <input
            id="name"
            type="text"
            placeholder="名前"
            //tailwind-configのスタイリングを参照
            className="w-full rounded border px-4 py-2 text-input placeholder:text-theme-light"
            // onchangeにsetName関数を引数として渡している
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="mt-8">
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            type="text"
            placeholder="メールアドレス"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full rounded border px-4 py-2 text-input placeholder:text-theme-light"
          />
        </div>

        <div className="mb-4 mt-8">
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            //type:passwordでドットで入力内容を伏せることができる
            type="text"
            placeholder="パスワード"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full rounded border px-4 py-2 text-input placeholder:text-theme-light"
          />
        </div>

        <Button label="送信" variant="primary" onClick={onSubmit} loading={loading} />
      </div>
    </Container>
  );
};

export default Page;
