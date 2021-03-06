import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  // 假資料
  tempMonsters = [
    {
      id: 1, // 根據全國圖鑑
      name: '妙蛙種子',
      attribute: ['poison', 'grass'],
      imgNum: 1,
      HP: 200,
      ATTACK: 150,
      DEFENSE: 40,
      SP_ATTACK: 230,
      SP_DEFENSE: 76,
      SPEED: 30,
      sold: 30,
      discount: 20,
      price: 24000,
      description: '超想要的拉~在台科大抓到的妙蛙種子，是不是很稀有R?', // 隨意能填寫盡量寫
      createdAt: '2018-05-11T19:40:35.917Z' // 隨意，注意->有些月份沒有31天/每一天只有24小時/每小時只有60分鐘/每分鐘只有60秒
    },
    {
      id: 143,
      name: '卡比獸',
      attributes: ['normal'],
      imgNum: 1,
      HP: 200,
      ATTACK: 150,
      DEFENSE: 40,
      SP_ATTACK: 230,
      SP_DEFENSE: 76,
      SPEED: 30,
      sold: 2,
      discount: 0,
      price: 87,
      description: '超想要的拉~在台科大抓到的妙蛙種子，是不是很稀有R?',
      createdAt: '2018-07-31T19:40:35.917Z'
    },
    {
      id: 252,
      name: '木守宮',
      attributes: ['grass'],
      imgNum: 1,
      HP: 200,
      ATTACK: 150,
      DEFENSE: 40,
      SP_ATTACK: 230,
      SP_DEFENSE: 76,
      SPEED: 30,
      sold: 2,
      discount: 10,
      price: 90,
      description: '資工系學會饒了我吧, 饒了我吧饒了我吧, 守宮守宮, 慈母手中線',
      createdAt: '2018-03-12T15:30:22.123Z'
    }
  ];

  constructor(private httpClient: HttpClient) { }

  /**
   * 從後端資料庫取得某範圍的 Monsters 的資料
   *
   * @returns Monsters[]
   */
  getMonsters(StartIndex: number, EndIndex: number) {
    // return this.httpClient.get(`http://localhost:8000/api/GetMonsters/${StartIndex}/${EndIndex}`);
    return this.tempMonsters;
  }

  /**
   * 從後端資料庫取得特定 ID 之 Monster 的ID、名字、屬性、更多圖片、價格、折扣、描述
   *
   * @param id: number
   * @returns Monster
   */
  // getMonster(id) {
  //   // return this.httpClient.get(`http://localhost:8000/api/products/${id}`);
  //   return this.tempMonsters[id];
  // }
}
