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
