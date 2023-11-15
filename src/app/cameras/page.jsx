import React from "react";
import { STRAPI_URL } from "../config";
import { Button, Chip } from "@nextui-org/react";

async function getCameras() {
    const res=await fetch(`${STRAPI_URL}/cameras?populate[train_station]=*=url`)
    if(!res.ok){
      throw new Error('Something went wrong')
    }
    const {data}=await res.json()
    return data
  }

const Cameras =async () => {
    const cameras = await getCameras()

  return (
    <div className="container">
<div class="rounded-lg border border-gray-200 dark:border-gray-700">
  <div class="overflow-x-auto rounded-t-lg">
    <table
      class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900"
    >
      <thead class="ltr:text-left rtl:text-right">
        <tr>
          <th
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
          >
            Code
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
          >
            State
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
          >
            Station
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
          >
            Detail
          </th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-center">
       {
            cameras.map(camera => (
 <tr>
<td key={camera.id}
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
          >
            {camera.attributes.code}
          </td>
          <td
            class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200"
          >
                  <Chip color="success">{camera.attributes.state}</Chip>
          </td>
          <td
            class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200"
          >
            {camera.attributes.train_station.data.attributes.station_name}
          </td>
          <td
            class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200"
          >
              <Button radius="full" size="sm" color="primary">
                  View
                </Button>
          </td>
</tr>
            ))
}
        
      </tbody>
    </table>
  </div>

  <div
    class="rounded-b-lg border-t border-gray-200 px-4 py-2 dark:border-gray-700"
  >
    <ol class="flex justify-end gap-1 text-xs font-medium">
      <li>
        <a
          href="#"
          class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
        >
          <span class="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
        >
          1
        </a>
      </li>

      <li
        class="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 dark:text-white"
      >
        2
      </li>

      <li>
        <a
          href="#"
          class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
        >
          3
        </a>
      </li>

      <li>
        <a
          href="#"
          class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
        >
          4
        </a>
      </li>

      <li>
        <a
          href="#"
          class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
        >
          <span class="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  </div>
</div>

    
    </div>
  );
};

export default Cameras;
