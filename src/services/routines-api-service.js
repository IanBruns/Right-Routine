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
    postNewExercise(exercise_name, exercise_description, assigned_routine) {
        return fetch(`${config.API_ENDPOINT}/routines/${assigned_routine}/exercises`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                exercise_name,
                exercise_description,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postNewRoutine(routine_name) {
        return fetch(`${config.API_ENDPOINT}/routines`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                routine_name,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteExercise(routine_id, exercise_id) {
        return fetch(`${config.API_ENDPOINT}/routines/${routine_id}/exercises/${exercise_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : undefined
            )
    },
    deleteRoutine(routine_id) {
        return fetch(`${config.API_ENDPOINT}/routines/${routine_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : undefined
            )
    }
}

export default RoutinesApiService;