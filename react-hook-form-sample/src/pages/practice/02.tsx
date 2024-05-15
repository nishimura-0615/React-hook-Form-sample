import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import Container from '@/components/common/parts/Container';
import { usePractice02 } from '@/hooks/form/usePractice02';

const Page:NextPage = () => {
  const {errors, handleClickPost, loading, register } = usePractice02()
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
}

export default Page;
<Button onClick={handleClickPost} label="送信" variant="primary" loading={loading}  />
