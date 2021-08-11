module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'dir',
        message: '[省略可] 配置するディレクトリ (src/pages 以下)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'ページコンポーネントのファイル名は？'
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { dir, name } = answers
        const path = `${ dir ? `${dir}/` : `` }`
        console.log(path)
        return { ...answers, path }
      })
  }
}
