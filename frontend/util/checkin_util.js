export const fetchAllCheckins = () => {
    return $.ajax({
        method: "GET",
        url: "/api/checkins"
    });
};

export const fetchCheckin = checkinId => {
    return $.ajax({
        method: "GET",
        url: `/api/checkins/${checkinId}`
    });
};

export const createCheckin = checkin => {
    return $.ajax({
        method: "POST",
        url: "/api/checkins",
        data: {checkin},
    });
};

export const updateCheckin = checkin => {
    return $.ajax({
        method: "PATCH",
        url: `/api/checkins/${checkin.id}`,
        data: { checkin }
    });
};

export const deleteCheckin = checkinId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/checkins/${checkinId}`
    });
};
