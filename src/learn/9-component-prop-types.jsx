import { numberWithComma } from "@/utils";
import { useState } from "react";
import {string, number, bool, arrayOf, shape} from 'prop-types'

export default function ComponentPropTyeps() {
  const [screencast, setScreencast] = useState(
    {
      id: 'dkdlel',
      title: '화면 공유',
      // tags: ['zoom', 'screen share', 'online lecture'],
      tags : [
        {
          id: 1,
          content: 'zoom',
          currnetYear: '2023'
        },
        {
          id: 2,
          content: 'screen share'
        }
      ],
      isOnline: true,
      price: 180000
    });

    const {id, title, tags, isOnline, price} = screencast

    return (
      <div>
        <h2>ComponentPropTypes</h2>
        <Screencast id={id} title={title} tags={tags} isOnline={isOnline} price={price}>

        </Screencast>
      </div>
    )
}

function Screencast(props) {
  return (
    <dl>
      <dt>ID</dt>
      <dd>{props.id}</dd>
      <dt>Title</dt>
      <dd>{props.title}</dd>
      <dt>Online</dt>
      <dd>{props.isOnline ? '🟢' : '🔴'}</dd>
      <dt>Price</dt>
      <dd>{numberWithComma(props.price)}</dd>
      <dt>Tags</dt>
      <dd>
        <ul>
          {
            props.tags.map((tag) => (
              <li key={tag.id}>{tag.content}</li>
            ))
          }
        </ul>
      </dd>
    </dl>
  )
}

//PropTypes
//컴포넌트 속성(props) 유효성 검사 도구
//컴포넌트.propTypes = {}
Screencast.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  isOnline: bool.isRequired,
  price: number.isRequired,
  tags: arrayOf(
    shape({
      id: number,
      content: string
    })
  ).isRequired
  // tags: PropTypes.array //any[] | Array<any>
  // tags: PropTypes.arrayOf(
  //   PropTypes.string
  //   // PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  // )
}