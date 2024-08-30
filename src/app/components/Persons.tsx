"use client"
import React from 'react'
import usePersons from './usePersons'

export default function Demo() {

  const { data } = usePersons()

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
