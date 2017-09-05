package com.veikosoomets.competitiontimer.web;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;


public abstract class CrudService<T, I extends Serializable, R extends CrudRepository<T, I>> {

    protected abstract R getRepository();

    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public Iterable<T> get() {
        return getRepository().findAll();
    }

    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public T get(I id) {
        return getRepository().findOne(id);
    }

    @Transactional
    public T add(T item) {
        return getRepository().save(item);
    }

    @Transactional
    public <S extends T> Iterable<S> add(Iterable<S> items) {
        return getRepository().save(items);
    }

    @Transactional
    public T update(T item) {
        return getRepository().save(item);
    }

    @Transactional
    public <S extends T> Iterable<S> update(Iterable<S> items) {
        return getRepository().save(items);
    }

    @Transactional
    public void delete(I id) {
        getRepository().delete(id);
    }

    @Transactional
    public void delete(Iterable<T> items) {
        getRepository().delete(items);
    }
}
