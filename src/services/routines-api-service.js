import TokenService from './token-service';
import config from '../config';

const RoutinesApiService = {
    getAllRoutines() {
        return fetch(`${config.API_ENDPOINT}/routines`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getRoutine(routineId) {
        return fetch(`${config.API_ENDPOINT}/articles/${routineId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getRoutineExercises(routineId) {
        return fetch(`${config.API_ENDPOINT}/routines/${routineId}/exercises`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default RoutinesApiService;