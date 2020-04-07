export const signup = user => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    });
};

export const fetchUser = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}`,
    })
);

export const updateUser = (user) => (
    $.ajax({
        method: "PATCH",
        url: `/api/users/${user.id}`,
        data: { user },
    })
);