"use client"
import React from 'react'
import useSubscribers from './useSubscribers'

export default function Demo() {

  const { data } = useSubscribers()

  return (
    <>
      {data ?
        (
          <ul>
            {data?.map((p, i) =>
              <li key={i}>{p.name} {p.age}</li>
            )}
          </ul>
        ) : (<div>Loading</div>)
      }
    </>
  )
}
