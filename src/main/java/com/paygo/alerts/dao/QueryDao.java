package com.paygo.alerts.dao;

import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;

import java.util.List;

/**
 * Created by kenny on 14/03/2017.
 */
public interface QueryDao {

    /**
     *  Runs an update query and returns the number of rows that have been updated.
     * @param query
     * @return
     */
    Integer update(String query);

    /**
     *  Runs an insert query and return the
     *      - The generated key, if any.
     *      or
     *      - The number of rows that have been affected by the query.
     * @param query
     * @param preparedStatementCreator
     * @return
     */
    Integer insert(String query, PreparedStatementCreator preparedStatementCreator);

    /**
     *  Queries the database and returns a list of rows mapped as the given Class T
     * @param query
     * @param mapper
     * @param <T>
     * @return
     */
    <T> List<T> queryForList(String query, RowMapper mapper);
}
