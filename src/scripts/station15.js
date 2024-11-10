async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList);
  return await result;

  // const results = await test();
  // console.log("getData - results:",results);
  // return results;
}

function test(userList) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // const userList = [
      //   { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
      //   { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
      // ];
      resolve(
        userList.map(user => ({
          full_name: user.family_name + ' ' + user.first_name
        }))
      );
    }, 3000);
  });
}

