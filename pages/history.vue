<template>
  <div class="overflow-y-auto h-screen p-8">
    <table class="text-left w-full table-fixed">
      <caption class="text-xl font-semibold text-left mb-8">
        History
        <p class="mt-1 text-base font-normal text-gray-500 dark:gray-gray-400">
          Showing history of sold items.
        </p>
      </caption>
      <thead class="text-base font-medium border-b-2 border-gray-300">
        <tr>
          <th scope="col" class="px-6 py-3 w-1/6">Item</th>
          <th scope="col" class="px-6 py-3 w-1/6">Profit</th>
          <th scope="col" class="px-6 py-3 w-1/6">Timestamp</th>
          <th
            scope="col"
            class="px-6 py-3 w-1/6"
            v-if="config.public.usersDatabase !== ''"
          >
            Cashier
          </th>
        </tr>
      </thead>
      <tbody v-if="tableSkeleton === true" class="animate-pulse">
        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-200/50">
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-wrap whitespace-nowrap"
          >
            <div class="h-2 bg-gray-300 rounded col-span-2"></div>
          </th>
        </tr>
      </tbody>
      <tbody>
        <tr
          v-for="item in historyList"
          :key="item.id"
          class="border-b border-gray-200 hover:bg-gray-200/50"
        >
          <th
            scope="row"
            class="px-6 py-4 flex flex-col font-normal text-gray-800 text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {{ item.item }}
            <span class="text-sm opacity-75" v-for="addon in item.options"
              >+ {{ JSON.parse(addon).name }}
            </span>

            <span
              class="opacity-75 text-sm"
              v-if="String(item.notes).trim().replace('null', '') !== ''"
            >
              <div v-if="String(item.notes).trim() !== 'undefined'">
                ({{ String(item.notes).trim() }})
              </div>
            </span>
          </th>
          <th
            scope="row"
            class="px-6 w-20 py-4 font-normal text-gray-800 text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {{ config.public.currency
            }}{{ item?.revenue?.toLocaleString(config.public.locale) }}
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-normal text-gray-800 text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {{ new Date(item.timestamp).toLocaleString(config.public.locale) }}
          </th>
          <th
            scope="row"
            v-if="config.public.usersDatabase !== ''"
            class="px-6 py-4 font-normal text-gray-800 text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {{ item.cashier }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";
import type { Database, Tables } from "~/types/supabase";

const config = useRuntimeConfig();

const historyList: Ref<Tables<"purchases">[] | [] | null> = ref([]);
const tableSkeleton = ref(true);

if (config.public.historyDatabase !== "" && tableNames.history) {
  const supabase = createClient<Database>(
    config.public.databaseUrl,
    config.public.anonymousApikey
  );

  async function getResults() {
    const { data } = await supabase.from(tableNames.history).select();
    historyList.value = data;
    tableSkeleton.value = false;
  }

  onMounted(() => {
    getResults();
  });
}
</script>
