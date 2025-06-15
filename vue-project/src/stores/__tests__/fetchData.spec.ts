import { describe,it,expect , beforeEach, vi} from "vitest"
import {useFetchData} from "@/stores/fetchData"
import {setActivePinia,createPinia} from "pinia"
import {type ItemsResponse} from "@/types/responses"
describe('Проверка стора получения данных', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('Корректно получает данные', async () => {
        const mockData:ItemsResponse = [
            {
                id: 1,
                name: "test1",
                description: "test",
                complite: false,
            },
            {
                id: 2,
                name: "test2",
                description: "test",
                complite: true,
            }
        ]
        const store = useFetchData()
        vi.spyOn(store,'getData').mockResolvedValue(mockData)
        const response = await store.getData()
        expect(response).toEqual(mockData)
    })
})